package lt.project2.productControler;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lt.project2.model.ProductModel;
import lt.project2.productService.ProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(value = "b")
@RestController
@RequestMapping(value = "/product")
@CrossOrigin
public class ProductControler {

    // ar ne geriau visur grazinti ResponseEntity? Su headeriais, HTTP.responsais? Nors gal musu atveju nebutinai


    @Autowired
    ProductService servicepr;

    @RequestMapping(method = RequestMethod.GET)
    @ApiOperation(value = "Get products", notes = "Returns all products")
    public List<ProductModel> getAllProducts() {

        return servicepr.getProducts();

    }

    @RequestMapping(method = RequestMethod.POST)
    public void addToProducts(@RequestBody ProductModel pr) {

        servicepr.addProduct(pr);
    }

    @RequestMapping(value = "/{idProduct}", method = RequestMethod.GET)
    public ProductModel getProductById(@PathVariable Long idProduct) {

        return servicepr.getProductById(idProduct);
    }

    @PutMapping(value = "/{idProduct}")
    public ProductModel editProductById(@PathVariable Long idProduct, @RequestBody ProductModel productEdited) {

        return servicepr.editProductById(idProduct, productEdited);
    }

    @RequestMapping(value = "/{idProduct}", method = RequestMethod.DELETE)
    public void deleteFromProducts(@PathVariable Long idProduct) {

        servicepr.deleteProduct(idProduct);
    }
}
