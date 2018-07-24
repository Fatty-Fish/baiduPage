(function() {
    var personData = [{ user: "权静", password: "1234567890" }, { user: "刘雨新", password: "1234567890" }, { user: "王治珺", password: "1234567890" }, { user: "王俊", password: "1234567890" }, { user: "刘晓书", password: "1234567890" }, { user: "邵千千", password: "1234567890" }];
    var oBtn = document.getElementsByTagName("button");
    username.onfocus = function() {
        emptyname.style.display = "none";
        errorname.style.display = "none";
        successname.style.display = "none";
        tipOne.style.display = "inline-block";
        username.oninput = function() {
            clearOne.style.display = "inline"
        }
    }
    clearOne.onclick = function() {
        username.value = "";
        errorname.style.display = "none"
    }
    username.onblur = function() {
        tipOne.style.display = "none";
        if (!username.value) {
            emptyname.style.display = "inline-block"            
            return false;
        }
        for (var prop in personData) {
            if (username.value === personData[prop].user) {
                errorname.style.display = "inline-block"
                return false;
            }
        }
        successname.style.display = "inline-block"
    }
    phonenumber.onfocus = function() {
        tipTwo.style.display = "inline-block";
        errorphone.style.display = "none"
        successphone.style.display = "none";
        phonenumber.oninput = function() {

            clearTwo.style.display = "inline"
        }
    }
    clearTwo.onclick = function() {
        phonenumber.value = "";
        errorphone.style.display = "none"
    }
    phonenumber.onblur = function() {
        tipTwo.style.display = "none";
        if (typeof phonenumber.value === "number") {
            if (phonenumber.value.split("").length < 11) {
                errorphone.style.display = "inline-block"
            } else if (phonenumber.value.split("").length > 13) {
                errorphone.style.display = "inline-block"
            } else {
                successphone.style.display = "inline-block"
            }
        }else {
            errorphone.style.display = "inline-block"               
        }
    }
    password.onfocus = function() {
        successpassword.style.display = "none"
        password.oninput = function() {

            clearThree.style.display = "inline"
        }
    }
    clearThree.onclick = function() {
        password.value = "";
    }
    password.onblur = function() {
        successpassword.style.display = "inline-block"
    }
    oBtn.onclick = function() {
        return false;
    }
})();