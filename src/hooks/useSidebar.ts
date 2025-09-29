
export default function useSidebar() {
  const coverOfSidebar = document.querySelector('.sidebar') as HTMLElement | null
    const sidebar = document.querySelector('.sidebar > div') as HTMLElement | null
  function showSide() {
    
    document.body.style.overflow= 'hidden'
    if (coverOfSidebar && sidebar ) {
      coverOfSidebar.style.display = 'block';
      sidebar.style.transform = 'translateX(0%)'
    }
  }
  function hideSide() {
    
    document.body.style.overflow= 'auto'
    if (coverOfSidebar && sidebar ) {
      coverOfSidebar.style.display = 'none';
      sidebar.style.transform = 'translateX(100%)'
    }
    }
    return {showSide,hideSide}
}
