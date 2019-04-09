package lt.project2.productRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lt.project2.model.ProductModel;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, Long> {

}
