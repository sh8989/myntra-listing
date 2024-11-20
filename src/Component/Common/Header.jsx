import React from 'react'
import { PiMagnifyingGlass } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { GoHeart } from "react-icons/go";
import { SlHandbag } from "react-icons/sl";

export default function Header() {
  return (
    
   <>
      <header>
			<div class="logo">
				<a href="index.html">
					<img src="image/logom.png"/>
				</a>	
			</div>
			<div class="menu">
				<div class="ankor1">
					<a href="men.html">men</a>
					<div class="submenu">
						<div class="submenucol">
							<h6>Topwear</h6>
							<ul>
								<a href="mtshirts.html">
									<li>T-Shirts</li>
								</a>
								<li>Casual Shirts</li>
								<li>Formal Shirts</li>
								<li>Sweatshirts</li>
								<li>Sweaters</li>
								<li>Jackets</li>
								<li>Blazers & Coats</li>
								<li>Suits</li>
								<li>Rain Jackets</li>
							</ul>
							<h6>Indian & Festive Wear</h6>
							<ul>
								<li>Kurtas & Kurta Sets</li>
								<li>Sherwanis</li>
								<li>Nehru Jackets</li>
								<li>Dhotis</li>
							</ul>
						</div>
						<div class="submenucol">
							<h6>Bottomwear</h6>
							<ul>
								<li>Jeans</li>
								<li>Casual Trousers</li>
								<li>Formal Trousers</li>
								<li>Shorts</li>
								<li>Track Pants & Joggers</li>
							</ul>
							<h6>Innerwear & Sleepwear</h6>
							<ul>
								<li>Briefs & Trunks</li>
								<li>Boxers</li>
								<li>Vests</li>
								<li>Sleepwear & Loungewear</li>
								<li>Thermals</li>
							</ul>
							<h6>Plus Size</h6>
						</div>
						<div class="submenucol">
							<h6>Footwear</h6>
							<ul>
								<li>Casual Shoes</li>
								<li>Sports Shoes</li>
								<li>Formal Shoes</li>
								<li>Sneakers</li>
								<li>Sandals & Floaters</li>
								<li>Flip Flops</li>
								<li>Socks</li>
							</ul>
							<h6>Personal Care & Grooming</h6>
							<h6>Sunglasses & Frames</h6>
							<h6>Watches</h6>
						</div>
						<div class="submenucol">
							<h6>Sports & Active Wear</h6>
							<ul>
								<li>Sports Shoes</li>
								<li>Sports Sandals</li>
								<li>Active T-Shirts</li>
								<li>Track Pants & Shorts</li>
								<li>Tracksuits</li>
								<li>Jackets & Sweatshirts</li>
								<li>Sports Accessories</li>
								<li>Swimwear</li>
							</ul>
							<h6>Gadgets</h6>
							<ul>
								<li>Smart Wearables</li>
								<li>Fitness Gadgets</li>
								<li>Headphones</li>
								<li>Speakers</li>
							</ul>
						</div>
						<div class="submenucol">
							<h6>Fashion Accessories</h6>
							<ul>
								<li>Wallets</li>
								<li>Belts</li>
								<li>Perfumes & Body Mists</li>
								<li>Trimmers</li>
								<li>Deodorants</li>
								<li>Ties, Cufflinks & Pocket Squares</li>
								<li>Accessory Gift Sets</li>
								<li>Caps & Hats</li>
								<li>Mufflers, Scarves & Gloves</li>
								<li>Phone Cases</li>
								<li>Rings & Wristwear</li>
								<li>Helmets</li>
							</ul>
							<h6>Bags & Backpacks</h6>
							<h6>Luggages & Trolleys</h6>
						</div>
					</div>
				</div>
				<div class="ankor1">
					<a href="women.html">women</a>
					<div class="submenu">
						<div class="submenucol">
							<h6>Indian & Fusion Wear</h6>
							<ul>
								<li>Kurtas & Suits</li>
								<li>Kurtis, Tunics & Tops</li>
								<li>Sarees</li>
								<li>Ethnic Wear</li>
								<li>Leggings, Salwars & Churidars</li>
								<li>Skirts & Palazzos</li>
								<li>Dress Materials</li>
								<li>Lehenga Cholis</li>
								<li>Dupattas & Shawls</li>
								<li>Jackets</li>
							</ul>
							<h6>Belts, Scarves & More</h6>
							<h6>Watches & Wearables</h6>
						</div>
						<div class="submenucol">
							<h6>Western Wear</h6>
							<ul>
								<li>Dresses</li>
								<li>Tops</li>
								<li>Tshirts</li>
								<li>Jeans</li>
								<li>Trousers & Capris</li>
								<li>Shorts & Skirts</li>
								<li>Co-ords</li>
								<li>Playsuits</li>
								<li>Jumpsuits</li>
								<li>Shrugs</li>
								<li>Sweaters & Sweatshirts</li>
								<li>Jackets & Coats</li>
								<li>Blazers & Waistcoats</li>
							</ul>
							<h6>Plus Size</h6>
						</div>
						<div class="submenucol">
							<h6>Maternity</h6>
							<h6>Sunglasses & Frames</h6>
							<h6>Footwear</h6>
							<ul>
								<li>Flats</li>
								<li>Casual Shoes</li>
								<li>Heels</li>
								<li>Boots</li>
								<li>Sports Shoes & Floaters</li>
							</ul>
							<h6>Sports & Active Wear</h6>
							<ul>
								<li>Clothing</li>
								<li>Footwear</li>
								<li>Sports Accessories</li>
								<li>Sports Equipment</li>
							</ul>
						</div>
						<div class="submenucol">
							<h6>Lingerie & Sleepwear</h6>
							<ul>
								<li>Bra</li>
								<li>Briefs</li>
								<li>Shapewear</li>
								<li>Sleepwear & Loungewear</li>
								<li>Swimwear</li>
								<li>Camisoles & Thermals</li>
							</ul>
							<h6>Beauty & Personal Care</h6>
							<ul>
								<li>Makeup</li>
								<li>Skincare</li>
								<li>Premium Beauty</li>
								<li>Lipsticks</li>
								<li>Fragrances</li>
							</ul>
						</div>
						<div class="submenucol">
							<h6>Gadgets</h6>
							<ul>
								<li>Smart Wearables</li>
								<li>Fitness Gadgets</li>
								<li>Headphones</li>
								<li>Speakers</li>
							</ul>
							<h6>Jewellery</h6>	
							<ul>
								<li>Fashion Jewellery</li>
								<li>Fine Jewellery</li>
								<li>Earrings</li>
							</ul>
							<h6>Backpacks</h6>
							<h6>Handbags, Bags & Wallets</h6>
							<h6>Luggages & Trolleys</h6>
						</div>
					</div>
				</div>
				<div class="ankor1">
					<a href="kids.html">kids</a>
					<div class="submenu">
						<div class="submenucol">
							<h6>Boys Clothing</h6>
							<ul>
								<li>T-Shirts</li>
								<li>Shirts</li>
								<li>Shorts</li>
								<li>Jeans</li>
								<li>Trousers</li>
								<li>Clothing Sets</li>
								<li>Ethnic Wear</li>
								<li>Track Pants & Pyjamas</li>
								<li>Jacket, Sweater & Sweatshirts</li>
								<li>Party Wear</li>
								<li>Innerwear & Thermals</li>
								<li>Nightwear & Loungewear</li>
								<li>Value Packs</li>
							</ul>
						</div>
						<div class="submenucol">
							<h6>Girls Clothing</h6>
							<ul>
								<li>Dresses</li>
								<li>Tops</li>
								<li>Tshirts</li>
								<li>Clothing Sets</li>
								<li>Lehenga choli</li>
								<li>Kurta Sets</li>
								<li>Party wear</li>
								<li>Dungarees & Jumpsuits</li>
								<li>Skirts & shorts</li>
								<li>Tights & Leggings</li>
								<li>Jeans, Trousers & Capris</li>
								<li>Jacket, Sweater & Sweatshirts</li>
								<li>Innerwear & Thermals</li>
								<li>Nightwear & Loungewear</li>
								<li>Value Packs</li>
				            </ul>
						</div>
						<div class="submenucol">
							<h6>Footwear</h6>
							<ul>
								<li>Casual Shoes</li>
								<li>Flipflops</li>
								<li>Sports Shoes</li>
								<li>Flats</li>
								<li>Sandals</li>
								<li>Heels</li>
								<li>School Shoes</li>
								<li>Socks</li>
							</ul>
							<h6>Toys & Games</h6>
							<ul>
								<li>Learning & Development</li>
								<li>Activity Toys</li>
								<li>Soft Toys</li>
								<li>Action Figure / Play set</li>
							</ul>
						</div>
						<div class="submenucol">
							<h6>Infants</h6>
							<ul>
								<li>Bodysuits</li>
								<li>Rompers & Sleepsuits</li>
								<li>Clothing Sets</li>
								<li>Tshirts & Tops</li>
								<li>Dresses</li>
								<li>Bottom wear</li>
								<li>Winter Wear</li>
								<li>Innerwear & Sleepwear</li>
								<li>Infant Care</li>
							</ul>
							<h6>Home & Bath</h6>
							<h6>Personal Care</h6>
						</div>
						<div class="submenucol">
							<h6>Kids Accessories</h6>
							<ul>
								<li>Bags & Backpacks</li>
								<li>Watches</li>
								<li>Jewellery & Hair accessory</li>
								<li>Sunglasses</li>
								<li>Masks & Protective Gears</li>
								<li>Caps & Hats</li>
							</ul>
							<h6>Brands</h6>
							<ul>
								<li>H&M</li>
								<li>Max Kids</li>
								<li>Pantaloons</li>
								<li>United Colors Of Benetton Kids</li>
								<li>YK</li>
								<li>U.S. Polo Assn. Kids</li>
								<li>Mothercare</li>
								<li>HRX</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="ankor1">
					<a href="home.html">home&living</a>
					<div class="submenu">
						<div class="submenucol">
							<h6>Topwear</h6>
							<ul>
								<li>T-Shirts</li>
								<li>Casual Shirts</li>
								<li>Formal Shirts</li>
								<li>Sweatshirts</li>
								<li>Sweaters</li>
								<li>Jackets</li>
								<li>Blazers & Coats</li>
								<li>Suits</li>
								<li>Rain Jackets</li>
							</ul>
							<h6>Indian & Festive Wear</h6>
							<ul>
								<li>Kurtas & Kurta Sets</li>
								<li>Sherwanis</li>
								<li>Nehru Jackets</li>
								<li>Dhotis</li>
							</ul>
						</div>
						<div class="submenucol">
							<h6>Bottomwear</h6>
							<ul>
								<li>Jeans</li>
								<li>Casual Trousers</li>
								<li>Formal Trousers</li>
								<li>Shorts</li>
								<li>Track Pants & Joggers</li>
							</ul>
							<h6>Innerwear & Sleepwear</h6>
							<ul>
								<li>Briefs & Trunks</li>
								<li>Boxers</li>
								<li>Vests</li>
								<li>Sleepwear & Loungewear</li>
								<li>Thermals</li>
							</ul>
							<h6>Plus Size</h6>
						</div>
						<div class="submenucol">
							<h6>Footwear</h6>
							<ul>
								<li>Casual Shoes</li>
								<li>Sports Shoes</li>
								<li>Formal Shoes</li>
								<li>Sneakers</li>
								<li>Sandals & Floaters</li>
								<li>Flip Flops</li>
								<li>Socks</li>
							</ul>
							<h6>Personal Care & Grooming</h6>
							<h6>Sunglasses & Frames</h6>
							<h6>Watches</h6>
						</div>
						<div class="submenucol">
							<h6>Sports & Active Wear</h6>
							<ul>
								<li>Sports Shoes</li>
								<li>Sports Sandals</li>
								<li>Active T-Shirts</li>
								<li>Track Pants & Shorts</li>
								<li>Tracksuits</li>
								<li>Jackets & Sweatshirts</li>
								<li>Sports Accessories</li>
								<li>Swimwear</li>
							</ul>
							<h6>Gadgets</h6>
							<ul>
								<li>Smart Wearables</li>
								<li>Fitness Gadgets</li>
								<li>Headphones</li>
								<li>Speakers</li>
							</ul>
						</div>
						<div class="submenucol">
							<h6>Fashion Accessories</h6>
							<ul>
								<li>Wallets</li>
								<li>Belts</li>
								<li>Perfumes & Body Mists</li>
								<li>Trimmers</li>
								<li>Deodorants</li>
								<li>Ties, Cufflinks & Pocket Squares</li>
								<li>Accessory Gift Sets</li>
								<li>Caps & Hats</li>
								<li>Mufflers, Scarves & Gloves</li>
								<li>Phone Cases</li>
								<li>Rings & Wristwear</li>
								<li>Helmets</li>
							</ul>
							<h6>Bags & Backpacks</h6>
							<h6>Luggages & Trolleys</h6>
						</div>
					</div>
				</div>
				<div class="ankor1">
					<a href="">beauty</a>
				</div>
				<div class="ankor1">
					<a href="">studio</a>
				</div>
			</div>
			<div class="search">
			   <PiMagnifyingGlass />
				<input type="text" name="searchbox" placeholder="Search for product,brands and more"/>
			</div>
			<div  class="icon">
				<div class="colum">
				  <CgProfile />
					Profile
				</div>
				<div class="colum">
					<GoHeart />
					Wishlist
				</div>
				<div class="colum">
					<SlHandbag />
					Bag
				</div>
			</div>
		</header>     

   </>
  )
}
