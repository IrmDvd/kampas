package lt.project1.productControler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lt.project1.product.model.ProductModel;
import lt.project1.product.service.ProductService;

@Api(value = "b")
@RestController
@RequestMapping(value = "/product")
@CrossOrigin
public class ProductControler {

	@Autowired
	ProductService serviceProduct;

	@RequestMapping(method = RequestMethod.GET)
	@ApiOperation(value = "Get products", notes = "Returns all products")
	public List<ProductModel> getAllProducts() {

		return serviceProduct.getProducts();

	}

	@RequestMapping(method = RequestMethod.POST)
	public void addToProducts(@RequestBody ProductModel pr) {

		serviceProduct.addProduct(pr);
	}
	
	@RequestMapping(method = RequestMethod.DELETE)
	public void deleteFromProducts(@RequestBody final Long idProduct) {
		
		serviceProduct.deleteProduct(idProduct);
	}
}
