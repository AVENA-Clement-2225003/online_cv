namespace Backend.Models
{
    public class Project
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required string IconName { get; set; }
        public required string ProjectType { get; set; }
        public string? ProjectLink { get; set; }
    }
}
