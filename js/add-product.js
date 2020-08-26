function tabs(){
var menu = document.getElementById("header-menu");
var btn = menu.getElementsByTagName("BUTTON");
var open = document.getElementsByClassName("open");
var i,j;
for(i=0;i<btn.length;i++)
{

btn[i].onclick = function(){
for(j=0;j<open.length;j++)
{
open[j].style.display = "none";
btn[j].className = "";
}
var id_menu = this.innerHTML;
document.getElementById(id_menu).style.display = "block";
this.className = "btn-active";
}
}
document.getElementById("business-btn").click();
}
tabs();
//start business-detials coding
function business_form(){
var seller_details = document.getElementById("seller-details");
function create_Element(){
//var center = document.createElement("center");
var frm = document.createElement('form');
frm.setAttribute("id","seller-details-form");
var have_gst = document.createElement("input");
have_gst.setAttribute("type","radio");
have_gst.setAttribute("id","have-gst");
have_gst.setAttribute("value","yes");
have_gst.setAttribute("name","gst");
have_gst.setAttribute("id","radio");
var have_gst_label = document.createElement("label");
have_gst_label.setAttribute("for","have-gst");
have_gst_label.innerHTML = "I have a GSTIN";
have_gst_label.setAttribute("id","have-gst-label");
var no_gst = document.createElement("input");
no_gst.setAttribute("type","radio");
no_gst.setAttribute("id","no-gst");
no_gst.setAttribute("value","no");
no_gst.setAttribute("name","gst");
have_gst.setAttribute("id","radio");
var no_gst_label = document.createElement("label");
no_gst_label.setAttribute("for","no-gst");
no_gst_label.innerHTML = "I have no GSTIN";
no_gst_label.setAttribute("id","no-gst-label");
var your_infor = document.createElement("p");
your_infor.innerHTML="Your Information";
your_infor.setAttribute("id","header-infor");
var hr = document.createElement("hr");
hr.setAttribute("id","header-hr");
var business_name = document.createElement("input");
business_name.setAttribute("type","text");
business_name.setAttribute("id","business-name");
business_name.setAttribute("placeholder","Enter Your Business Name");
//business_name.setAttribute("required","required");
var sup = document.createElement("sup");
sup.innerHTML = "*";
var pan_number = document.createElement("input");
pan_number.setAttribute("type","number");
pan_number.setAttribute("id","pan-number");
pan_number.setAttribute("placeholder","Enter your pan number");
//pan_number.setAttribute("required","required");
var business_type = document.createElement("input");
business_type.setAttribute("type","text");
business_type.setAttribute("id","business-type");
business_type.setAttribute("placeholder","Enter Your Business Type");
//business_type.setAttribute("required","required");
var address = document.createElement("textarea");
address.setAttribute("id","address");
address.setAttribute("placeholder","Enter your address");
var pincode = document.createElement("input");
pincode.setAttribute("type","number");
pincode.setAttribute("placeholder","Enter your pincode");
pincode.setAttribute("id","pincode");
//pincode.setAttribute("required","required");
var massage = document.createElement("span");
massage.setAttribute = ("id","massage");
var submit_btn = document.createElement("input");
submit_btn.setAttribute("type","submit");
submit_btn.setAttribute("id","submit-btn");
submit_btn.innerHTML = "SUBMIT";
seller_details.appendChild(frm);
frm.appendChild(have_gst);
frm.appendChild(have_gst_label);
createBr(2, frm);
frm.appendChild(no_gst);
frm.appendChild(no_gst_label);
//createBr(1, frm);
frm.appendChild(your_infor);
frm.appendChild(hr);
createBr(1, frm);
frm.appendChild(business_name);
createBr(2, frm);
frm.appendChild(pan_number);
createBr(2, frm);
frm.appendChild(business_type);
createBr(2, frm);
frm.appendChild(address);
createBr(2, frm);
frm.appendChild(pincode);
createBr(2, frm);
frm.appendChild(massage);
frm.appendChild(submit_btn);
}
create_Element();
function createBr(number, id) {
for(let i=0;i<number;i++) {
id.appendChild( document.createElement('br'));
}
}
}
business_form();
// -----------------
// //upload pick
// -----------------
function upload_pic(){
var input  = document.getElementById("profile-pic-upload");
var freader = new FileReader();
freader.readAsDataURL(input.files[0]);
freader.onload = function(event){
var show = document.getElementById("seller-pic");
var image_url = event.target.result;
show.style.background = "url("+event.target.result+")";
show.style.backgroundSize = "cover";
show.style.backgroundRepeat = "no-repeat";
show.className = "";
var icon = document.getElementById("upload-icon");
icon.style.display = "none";

var submit_btn = document.getElementById("submit-btn");
submit_btn.onclick = function(){
localStorage.setItem(sessionStorage.getItem("user_mail")+" image_url",image_url);
loaclStorage.getItem(signup_email.value);

}
}
}

// ---------------------
// //show seller name
// ---------------------

function show_name(){
var local_data = sessionStorage.getItem("user_mail");
var local_data = localStorage.getItem(local_data);
var local_string = JSON.parse(local_data);
document.getElementById("seller-name").innerHTML = local_string.name;
}
show_name();


function check(){
        var user_email = sessionStorage.getItem("user_mail");
        var local_data = localStorage.getItem(user_email+"business_details");
        if(local_data != null)
        {
            show_data();
        }
        else{
            store();
        }

}
check();
// ------------------------
// // store seller data
// ------------------------
function store(){
    var busi_name = document.getElementById("business-name");
    var pan_num = document.getElementById("pan-number");
    var busi_type = document.getElementById("business-type");
    var address = document.getElementById("address");
    var pincode = document.getElementById("pincode");
    var submit_btn = document.getElementById("submit-btn");
    submit_btn.onclick = function(){
    var seller_det = {business_name:busi_name.value,pan_number:pan_num.value,business_type:busi_type.value,address:address.value,pincode:pincode.value};
    var seller_det_string = JSON.stringify(seller_det);
    var user_mail = sessionStorage.getItem("user_mail");
    localStorage.setItem(user_mail+"business_details",seller_det_string);
   
    
}
//alert("data not found");
}
store();

// ----------------------------
// show seller data from localStorage
// --------------------------------
function show_data(){
        var user_email = sessionStorage.getItem("user_mail");
        var local_data = localStorage.getItem(user_email+"business_details");
        var parse_data = JSON.parse(local_data);
        var busi_name = document.getElementById("business-name");
        busi_name.value = parse_data.business_name;
        var pan_num = document.getElementById("pan-number");
        pan_num.value = parse_data.pan_number;
        var busi_type = document.getElementById("business-type");
        busi_type.value = parse_data.business_type;
        var address = document.getElementById("address");
        address.value = parse_data.address;
        var pincode = document.getElementById("pincode");
        pincode.value = parse_data.pincode;
        var seller_img_url = localStorage.getItem(user_email+" "+"image_url");
        var show = document.getElementById("seller-pic");
        show.style.background = "url("+seller_img_url+")";
        show.style.backgroundSize = "cover";
        show.style.backgroundRepeat = "no-repeat";
        show.className = "";
        var icon = document.getElementById("upload-icon");
        icon.style.display = "none";
        
        
}
// show_data();
