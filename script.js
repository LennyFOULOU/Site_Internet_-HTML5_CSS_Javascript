
    var mybutton = document.getElementById("backToTopBtn");

    // Afficher le bouton lorsqu'on descend en dessous de 20 pixels depuis le haut de la page
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

   
    mybutton.onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    function printCV(cvUrl) {
        var printWindow = window.open(cvUrl, '_blank');
        
        printWindow.onload = function () {
            printWindow.print();
            printWindow.onafterprint = function () {
                printWindow.close();
            };
        };
    }

    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.querySelector('.menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
    
        menuToggle.addEventListener('click', function () {
            mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'flex' : 'none';
        });
    });
