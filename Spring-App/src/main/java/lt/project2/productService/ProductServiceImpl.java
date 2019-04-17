package lt.project2.productService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.source.InvalidConfigurationPropertyValueException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import lt.project2.model.ProductModel;
import lt.project2.productRepository.ProductRepository;
import org.springframework.web.server.ResponseStatusException;

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

	@Override
	public ProductModel editProductById(Long idProduct, ProductModel productEdited) {

		return repopr.findById(idProduct).map(product -> {
			product.setSku(productEdited.getSku());
			product.setQty(productEdited.getQty());
			product.setWeight(productEdited.getWeight());
			product.setHeight(productEdited.getHeight());
			productEdited.setLength(product.getLength());
			product.setWidth(productEdited.getWidth());
			return repopr.save(product);
		}).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		};


}
