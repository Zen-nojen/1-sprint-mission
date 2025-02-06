console.log("< Product >");
const getProductListRes = await productService.getProductList(1, 10, "맥북");
const products = getProductListRes.data.list.map((element) => {
			  let product;
			  if (element.tags.includes("전자제품")) {
				  			  		      product = new ElectronicProduct(
										      						      			            element.name,
										      						      			            element.description,
										      						      			            element.price,
										      						      			            element.tags,
										      						      			            element.images
										      						      			          );
				  			  		    } else {
										    						    			        product = new Product(
																																					      element.name,
																																					      element.description,
																																					      element.price,
																																					      element.tags,
																																					      element.images
																																					    );
										    						    			      }
			  product.favorite();
			  return product;
});
console.log(products);
