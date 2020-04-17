import wixData from 'wix-data';

$w.onReady(function () {
	//TODO: write your page related code here...

});

export function dropdownSuburb_change(event) {
	let filterSuburb = $w("#dropdownSuburb").value;
    if (filterSuburb === "All")
        $w("#dataset1").setFilter(wixData.filter());
    else
        $w("#dataset1").setFilter(wixData.filter().contains("copyOfSuburb2", filterSuburb));
	//Add your code for this event here: 
}

export function radioDelivery_change(event) {
    let filterDelivery = $w("#radioDelivery").value;
    let filterDeliveryOption = $w("#radioDelivery").
    if (filterDelivery === "Either")
        $w("#dataset1").setFilter(wixData.filter().contains("copyOfDeliveryMethod", filterDelivery));
    else
        $w("#dataset1").setFilter(wixData.filter().contains("copyOfDeliveryMethod", filterDelivery));

}

