document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});

function openPopup1() {
    document.getElementById('popup1').style.display = 'flex';
}

function closePopup1() {
    document.getElementById('popup1').style.display = 'none';
}

function openPopup2() {
    document.getElementById('popup2').style.display = 'flex';
}

function closePopup2() {
    document.getElementById('popup2').style.display = 'none';
}

    function openPopup3() {
        document.getElementById('popup3').style.display = 'flex';
    }

    function closePopup3() {
        document.getElementById('popup3').style.display = 'none';
    }

    function openPopup4() {
        document.getElementById('popup4').style.display = 'flex';
    }

    function closePopup4() {
        document.getElementById('popup4').style.display = 'none';
    }

    function openPopup5() {
        document.getElementById('popup5').style.display = 'flex';
    }

    function closePopup5() {
        document.getElementById('popup5').style.display = 'none';
    }
    function openPopup6() {
        document.getElementById('popup6').style.display = 'flex';
    }

    function closePopup6() {
        document.getElementById('popup6').style.display = 'none';
    }

    function openPopup7() {
        document.getElementById('popup7').style.display = 'flex';
    }

    function closePopup7() {
        document.getElementById('popup7').style.display = 'none';
    }

    function openPopup8() {
        document.getElementById('popup8').style.display = 'flex';
    }

    function closePopup8() {
        document.getElementById('popup8').style.display = 'none';
    }

    function openPopup9() {
        document.getElementById('popup9').style.display = 'flex';
    }

    function closePopup9() {
        document.getElementById('popup9').style.display = 'none';
    }

    function openPopup10() {
        document.getElementById('popup10').style.display = 'flex';
    }

    function closePopup10() {
        document.getElementById('popup10').style.display = 'none';
    }

    function openPopup11() {
        document.getElementById('popup11').style.display = 'flex';
    }

    function closePopup11() {
        document.getElementById('popup11').style.display = 'none';
    }

    function openPopup12() {
        document.getElementById('popup12').style.display = 'flex';
    }

    function closePopup12() {
        document.getElementById('popup12').style.display = 'none';
    }


