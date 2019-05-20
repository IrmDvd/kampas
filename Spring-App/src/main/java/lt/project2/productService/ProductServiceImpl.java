package lt.project2.productService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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
	public ResponseEntity<ProductModel> getProductById(Long idProduct) {
		if(idProduct <= 1
				) {
			System.out.println("Ne tas no");
			return ResponseEntity.badRequest().body(repopr.findById(idProduct).get());
		} else {}
		return ResponseEntity.ok(repopr.findById(idProduct).get());
	}

	@Override
	public ProductModel editProductById(Long idProduct, ProductModel productEdited) {
		return repopr.findById(idProduct).map(product -> {
		product.setSku(productEdited.getSku());
		product.setBarcode(productEdited.getBarcode());
		product.setQty(productEdited.getQty());
		return repopr.save(product);
		}).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
	}
	}


