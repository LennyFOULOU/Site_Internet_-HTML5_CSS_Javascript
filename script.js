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

    document.addEventListener('DOMContentLoaded', function () {
        var buttons = document.querySelectorAll('.theme-button');
        var contents = document.querySelectorAll('.theme-content');
    
        // Ajoutez une classe "hidden" à tous les contenus initialement
        contents.forEach(function (content) {
            content.classList.add('hidden');
        });
    
        buttons.forEach(function (button, index) {
            button.addEventListener('click', function () {
                // Cachez tous les contenus
                contents.forEach(function (content) {
                    content.classList.add('hidden');
                });
    
                // Retirez la classe "hidden" du contenu associé au bouton cliqué
                contents[index].classList.remove('hidden');
    
                // Gérez le fond spécifique au thème
                if (contents[index].classList.contains('ciel')) {
                    document.body.classList.remove('mer-background', 'neige-background', 'desert-background');
                    document.body.classList.add('ciel-background');
                } else if (contents[index].classList.contains('mer')) {
                    document.body.classList.remove('ciel-background', 'neige-background', 'desert-background');
                    document.body.classList.add('mer-background');
                } else if (contents[index].classList.contains('neige')) {
                    document.body.classList.remove('ciel-background', 'mer-background', 'desert-background');
                    document.body.classList.add('neige-background');
                } else if (contents[index].classList.contains('desert')) {
                    document.body.classList.remove('ciel-background', 'mer-background', 'neige-background');
                    document.body.classList.add('desert-background');
                }
            });
        });
    });
