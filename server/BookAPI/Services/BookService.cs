using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookAPI.Models;
using BookAPI.Models.InputModels;
using BookAPI.Models.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace BookAPI.Services
{
    public class BookService : IBookService
    {
        private readonly BookContext _bookContext;

        public BookService(BookContext context)
        {
            _bookContext = context;

        }

        public async Task<List<Book>> GetAll()
        {

            return await _bookContext.Books.ToListAsync();
        }

        public async Task<Book> Get(int id)
        {
            return await _bookContext.Books.FirstOrDefaultAsync(book => book.Id == id);
        }

        public async Task<Book> Add(Book book)
        {
            var entity = _bookContext.Books.Any(e => e.Isbn == book.Isbn);

            if (entity)
            {
                throw new Exception("Book already exists");
            }


            _bookContext.Books.Add(book);

            await _bookContext.SaveChangesAsync();

            return await _bookContext.Books.FirstOrDefaultAsync(x => x.Isbn == book.Isbn);
        }

        public async Task Update(int id, BookInputModel book)
        {
            var entity = await _bookContext.Books.FindAsync(id);
            if (entity == null)
            {
                throw new Exception("Employee does not exist");
            }

            _bookContext.Entry(entity).CurrentValues.SetValues(book);

            try
            {
                await _bookContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
        }

        public async Task Delete(int id)
        {
            var entity = await _bookContext.Books.FindAsync(id);

            if (entity == null)
            {
                throw new Exception("Book Doesn't Exist");
            }

            _bookContext.Remove(entity);
            await _bookContext.SaveChangesAsync();

        }
    }
}