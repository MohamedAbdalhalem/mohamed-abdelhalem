
export default function useSidebar() {
  function showSide() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement | null
    const div = document.querySelector('.sidebar > div') as HTMLElement | null
    document.body.style.overflow= 'hidden'
    if (sidebar && div) {
      sidebar.style.display = 'block';
      div.style.transform = 'translateX(0%)';
    }
  }
  function hideSide() {
    const sidebar = document.querySelector('.sidebar') as HTMLElement | null
    const div = document.querySelector('.sidebar > div') as HTMLElement | null
    document.body.style.overflow= 'auto'
    if (sidebar && div) {
      sidebar.style.display = 'none';
      div.style.transform = 'translateX(100%)';
    }
    }
    return {showSide,hideSide}
}
