import React, { useState } from 'react'
import FilterLeft from './FilterLeft'
import FilterRight from './FilterRight'
import { Button } from 'react-bootstrap';



export default function Home() {
	let [page,setPage] = useState(1);
	const [itemSorting,setItemSorting] = useState();
	const [checkedCategories,setCheckedCategoories] = useState([]);
	const [checkedBrand,setCheckedBrand] = useState([]);
	const [priceFrom,setPricefrom] = useState();
	const [priceTo,setPriceTo] = useState();
	const [discountTO,setDiscountTo] = useState();
	const [discountFrom,setDiscountFrom] = useState();

	

	const filterSorting = (event) => {
		let final = event.target.value;
		console.log(event.target.value);
		setItemSorting(final);
		
	}

	 let backpage =()=>{
		page--;
		setPage(page)
	}
	let nextpage =()=>{
		page++;
		setPage(page)
	}
	
  return (
    <>
        
			<div class="row1mt">
				<p>Home / Clothing / <b>Men T-shirts</b></p>
			</div>
		
			<div class="row2mt">
				<p><b>Men T-shirts </b>- 146062 items</p>
			</div>
		
			<div class="row3mt">
				<div class="row3mtc1">FILTERS</div>
				<div class="row3mtc2">
					<select>
						<option>Bundels</option>
					</select>
					<select>
						<option>Country of Origin</option>
						<option>All Countries</option>
						<option>India</option>
					</select>
					<select>
						<option>Size</option>
						<option>3XS</option>
					</select>
				</div>
				<div class="row3mtc3">
					<select name='sorting'  onChange={ filterSorting }>
						<option value='1'>sort by : recommended</option>
						<option value='2'> Name : A to Z</option>
						<option value='3'> Name : Z to A</option>
						<option value='4'> Price : Low to High</option>
						<option value='5'> Price : High to Low </option>
						<option value='6'> Discouted Price :Low to High</option>
						<option value='7'> Discouted Price :High to Low</option>
						<option value='7'> Rating :Low to High</option>
						<option value='9'> Rating :High to Low</option>
					</select>
					
				</div>
			</div>
		
        	<div class="row4mt">
        		<div class="row4mtc1"></div>
        		<div class="row4mtc2"></div>
        	</div>
	
			<div class="row5mt">
				
				<FilterLeft setCheckedCategoories={setCheckedCategoories} checkedCategories={checkedCategories} checkedBrand={checkedBrand} setCheckedBrand={setCheckedBrand} setPriceTo={setPriceTo} setPricefrom={setPricefrom} setDiscountFrom={setDiscountFrom} setDiscountTo={setDiscountTo}/>
				<FilterRight page={page}itemSorting={itemSorting} checkedCategories={checkedCategories} checkedBrand={checkedBrand} priceFrom={priceFrom} priceTo={priceTo} discountFrom={discountFrom} discountTo={discountTO}/>
			</div>
			<div className="container-fluid">
				<div className="container">
					<div className="row mt-4">
						<div className="col d-flex justify-content-end">
							<Button onClick={backpage}>Prev</Button>
						</div>
						<div className="col">
							<Button onClick={nextpage} >Next</Button>
						</div>
					</div>
				</div>
			</div>
    </>
   
  )
}
