

function validate() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    if (name == '') {
        alert('Please Enter Your Name');
        return;
    }
    if (email == '') {
        alert('Please Enter Your Email id');
        return;
    }
    if (password1 == '') {
        alert('Please Enter Your Password');
        return;
    }
    if (password2 == '') {
        alert('Please Re-Type Your Password');
        return;

    }
    if (password1 != password2) {
        alert('Please Enter Your Correct Password the password are mis match ')
        return;
    }




    if (name != '' && email != '' && password1 != '' && password2 != '') {
        let signup = {
            'name': name,
            'email': email,
            'password1': password1,
            'password2': password2,
        }
        let formdetails = localStorage.getItem('formdetails') ? JSON.parse(localStorage.getItem('formdetails')) : [];
        formdetails.push(signup);
        localStorage.setItem('formdetails', JSON.stringify(formdetails));

        window.location.assign('login.html')
        alert('Account Created Successfully');



    }
    else {
        alert('Enter All Fields')
    }

}










let captcha1 = document.getElementById('captcha').value
let show = document.getElementById('captch')

let random1 = Math.floor(Math.random() * 10000)
show.textContent = (random1)


function login() {
    var email1 = document.getElementById('email1').value;
    var password3 = document.getElementById('password3').value;
    
let captcha1 = document.getElementById('captcha').value




    if (email1 == '') {
        alert('Please Enter Your Email id');
        return;
    }
    if (password3 == '') {
        alert('Please Enter Your Password');
        return;
    }

    if(captcha1==''){
        alert('Enter Captcha')
    }


    // if () {
    //     document.write('correct')
    // }

    // else {
    //     document.write('wrong')
    // }





    if (email1 != '' && password3 != '' && parseInt(random1) === parseInt(captcha1)) {
        if (check()) {
            window.location.assign('index.html')
            alert('log In Successfull');


        }
        else {
            alert('Invalid Log in Credentials')
        }
        function check() {

            let exitUser = JSON.parse(localStorage.getItem('formdetails'));
            let status = false;
            exitUser.forEach(e => {
                if (e.email == email1 && e.password1 == password3) {
                    status = true;
                }
            });
            return status;
        }
    }

    else {
        alert('Invalid Credentials');
    }
}



function order() {
    let user = confirm('Confirm Your order !')
    if (user == true) {
        window.location.assign("order.html")


    }
}


function addToCart(productName, imageSrc, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, quantity: 1, price: price, image: imageSrc });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added To Cart')
    window.location.assign('cart1.html')
    update();
}

function logout() {
    alert('Redirect to login');
    window.location.assign('login.html')
}







