class Product {
			  constructor(name, description, price, tags, images, favoriteCount = 0) {
				  			  		      this.name = name;
				  			  		      this.description = description;
				  			  		      this.price = price;
				  			  		      this.tags = tags;
				  			  		      this.images = images;
				  			  		      this._favoriteCount = favoriteCount;
				  			  		    }

			  set favoriteCount(count) {
				  			  		      throw new Error("call favorite()");
				  			  		    }

			  get favoriteCount() {
				  			  		      return this._favoriteCount;
				  			  		    }

			  favorite() {
				  			  		      this._favoriteCount += 1;
				  			  		    }
}
