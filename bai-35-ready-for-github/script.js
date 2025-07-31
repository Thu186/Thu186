function showPage(id) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.classList.remove('active');
    });
  
    const activePage = document.getElementById(id);
    if (activePage) {
      activePage.classList.add('active');
    }
  }
  