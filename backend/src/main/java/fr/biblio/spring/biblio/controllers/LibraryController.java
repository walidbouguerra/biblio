package fr.biblio.spring.biblio.controllers;

import fr.biblio.spring.biblio.models.Book;
import fr.biblio.spring.biblio.services.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class LibraryController {
    @Autowired
    private LibraryService libraryService;

    @RequestMapping("/books")
    public List<Book> getBooks() {
        return libraryService.getBooks();
    }

    @RequestMapping("/book/{id}")
    public Optional<Book> getBookById(@PathVariable long id) {
        return libraryService.getBookById(id);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/book/{id}")
    public void deleteBook(@PathVariable long id) {
        libraryService.deleteBook(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/books")
    public void addBook(@RequestBody Book book) {
        libraryService.addBook(book);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/book/{id}")
    public void updateBook(@RequestBody Book book, @PathVariable long id) {
        libraryService.updateBook(book, id);
    }
}
