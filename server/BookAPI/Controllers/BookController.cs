using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookAPI.Models;
using BookAPI.Models.InputModels;
using BookAPI.Models.ViewModels;
using BookAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookAPI.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;

        }

        // GET: api/Book
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
        {
            var books = await _bookService.GetAll();

            if (books.Count == 0)
            {
                return NoContent();
            }

            return Ok(books);
        }

        // GET: api/Book/5
        [HttpGet("{id}", Name = "GetBook")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            var book = await _bookService.Get(id);

            if (book == null)
            {
                return NotFound();
            }

            return Ok(book);
        }

        // POST: api/Book
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Book>> PostBook(Book book)
        {

            if (book is null)
                return BadRequest(new ArgumentNullException());

            try
            {
                var bookEntity = await _bookService.Add(book);

                return CreatedAtAction(nameof(GetBook), new { id = book.Id }, bookEntity);

            }
            //BookAlreadyExistsException
            catch (Exception e)
            {

                return UnprocessableEntity(e.Message);
            }
        }


        // PUT: api/Book/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBook(int id, BookInputModel book)
        {
            try
            {
                await _bookService.Update(id, book);
                return NoContent();

            }
            //BookDoesNotExistException
            catch (Exception e)
            {
                return NotFound(e);
            }
        }



        // DELETE: api/Book/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            try
            {
                await _bookService.Delete(id);
                return NoContent();
            }

            //GameDoesNotExist
            catch (Exception e)
            {
                return NotFound(e);
            };

        }

    }
}
