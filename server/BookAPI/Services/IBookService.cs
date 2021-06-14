using System.Collections.Generic;
using System.Threading.Tasks;
using BookAPI.Models;
using BookAPI.Models.InputModels;
using BookAPI.Models.ViewModels;

namespace BookAPI.Services
{
    public interface IBookService
    {
        Task<List<Book>> GetAll();

        Task<Book> Get(int id);

        Task<Book> Add(Book entity);

        Task Update(int id, BookInputModel entity);

        Task Delete(int id);
    }
}