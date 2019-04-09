package lt.project2.productService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.project2.model.ProductModel;
import lt.project2.productRepository.ProductRepository;
@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	ProductRepository repopr;

	@Override
	public List<ProductModel> getProducts() {
		return repopr.findAll();
	}

	@Override
	public void addProduct(ProductModel pr) {
		repopr.save(pr);
		
	}

	@Override
	public void deleteProduct(Long idProduct) {
		repopr.deleteById(idProduct);
		
	}

	@Override
	public ProductModel getProductById(Long idProduct) {
		return repopr.findById(idProduct).get();
	}

}
