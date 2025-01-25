namespace Backend.Models
{
    public class IDE
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string IconName { get; set; }
        public string? CompagnyName { get; set; }
    }
}
