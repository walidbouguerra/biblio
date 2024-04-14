package fr.biblio.spring.biblio.services;

import fr.biblio.spring.biblio.models.Book;
import fr.biblio.spring.biblio.repositories.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class LibraryService {

    @Autowired
    private LibraryRepository libraryRepository;

    public List<Book> getBooks() {
        List<Book> books = new ArrayList<>();
        libraryRepository.findAll().forEach(book -> books.add(book));
        return books;
    }

    public Optional<Book> getBookById(long id) {
        return libraryRepository.findById(id);
    }

    public void deleteBook(long id) {
        libraryRepository.deleteById(id);
    }

    public void addBook(Book book) {
        libraryRepository.save(book);
    }

    public void updateBook(Book book, long id) {
        libraryRepository.save(book);
    }
}
