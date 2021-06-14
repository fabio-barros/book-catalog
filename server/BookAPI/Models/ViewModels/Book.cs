using System;
using System.Collections.Generic;

#nullable disable

namespace BookAPI.Models.ViewModels
{
    public partial class Book
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Isbn { get; set; }
    }
}
