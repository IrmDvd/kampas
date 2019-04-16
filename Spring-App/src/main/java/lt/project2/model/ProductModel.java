package lt.project2.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class ProductModel {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idProduct;
	private String sku;
	private int qty;
	private String name;
	private String barcode;
	private double height;
	private double weight;
	private double length;
	private double width;
	@Temporal(TemporalType.DATE)
	private Date dt;

	public ProductModel() {

	}

	public ProductModel(String sku, int qty, double height, double weight, double length, double width) {
		super();
		this.sku = sku;
		this.qty = qty;
		this.height = height;
		this.weight = weight;
		this.length = length;
		this.width = width;
	}

	public String getIdProduct() {
		return String.valueOf(idProduct);
	}

	public void setIdProduct(Long idProduct) {
		this.idProduct = idProduct;
	}

	public String getDt() {
		return String.valueOf(dt);
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public String getQty() {
		return String.valueOf(qty);
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public String getHeight() {
		return String.valueOf(height);
	}

	public void setHeight(double height) {
		this.height = height;
	}

	public String getWeight() {
		return String.valueOf(weight);
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public String getLength() {
		return String.valueOf(length);
	}

	public void setLength(double length) {
		this.length = length;
	}

	public String getWidth() {
		return String.valueOf(width);
	}

	public void setWidth(double width) {
		this.width = width;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBarcode() {
		return barcode;
	}

	public void setBarcode(String barcode) {
		this.barcode = barcode;
	}

}
