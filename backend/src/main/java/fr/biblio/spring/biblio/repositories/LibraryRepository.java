package fr.biblio.spring.biblio.repositories;

import fr.biblio.spring.biblio.models.Book;
import org.springframework.data.repository.CrudRepository;

public interface LibraryRepository extends CrudRepository<Book, Long> {
}
