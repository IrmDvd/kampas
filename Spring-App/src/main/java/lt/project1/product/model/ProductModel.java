package lt.project1.product.model;

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
	@Temporal(TemporalType.DATE)
	private Date dt;
	private double height;
	private double weight;
	private double length;
	private double width;

	public ProductModel() {

	}

	public ProductModel(Long idProduct, String sku, int qty, Date dt, double height, double weight, double length,
			double width) {
		super();
		this.idProduct = idProduct;
		this.sku = sku;
		this.qty = qty;
		this.dt = dt;
		this.height = height;
		this.weight = weight;
		this.length = length;
		this.width = width;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public Long getIdProduct() {
		return idProduct;
	}

	public Date getDt() {
		return dt;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public double getLength() {
		return length;
	}

	public void setLength(double length) {
		this.length = length;
	}

	public double getWidth() {
		return width;
	}

	public void setWidth(double width) {
		this.width = width;
	}

}
