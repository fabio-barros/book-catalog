using System.ComponentModel.DataAnnotations;

namespace BookAPI.Models.InputModels
{
    public class BookInputModel
    {
        [Required]
        [StringLength(50, MinimumLength = 2, ErrorMessage = "Title length must be at least 2 and up to a maximum of 50 characters long.")]
        public string Title { get; set; }
        [Required]
        [StringLength(20, MinimumLength = 3, ErrorMessage = "Author length must be at least 3 and up to a maximum of 20 characters long.")]
        public string Author { get; set; }
        [Required]
        [StringLength(14, MinimumLength = 13, ErrorMessage = "Isbn length must be at least 13 for an ISNB13 without dash and 14 for dashed.")]
        public string Isbn { get; set; }
    }
}