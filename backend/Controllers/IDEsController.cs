using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IDEsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public IDEsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/IDEs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IDE>>> GetIDEs()
        {
            return await _context.IDEs.ToListAsync();
        }

        // GET: api/IDEs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IDE>> GetIDE(int id)
        {
            var IDE = await _context.IDEs.FindAsync(id);

            if (IDE == null)
            {
                return NotFound();
            }

            return IDE;
        }

        // POST: api/IDEs
        [HttpPost]
        public async Task<ActionResult<IDE>> PostIDE(IDE IDE)
        {
            _context.IDEs.Add(IDE);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetIDE), new { id = IDE.Id }, IDE);
        }

        // PUT: api/IDEs/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIDE(int id, IDE IDE)
        {
            if (id != IDE.Id)
            {
                return BadRequest();
            }

            _context.Entry(IDE).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/IDEs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIDE(int id)
        {
            var IDE = await _context.IDEs.FindAsync(id);
            if (IDE == null)
            {
                return NotFound();
            }

            _context.IDEs.Remove(IDE);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
