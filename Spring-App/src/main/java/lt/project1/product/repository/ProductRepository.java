package lt.project1.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lt.project1.product.model.ProductModel;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, Long> {

}
