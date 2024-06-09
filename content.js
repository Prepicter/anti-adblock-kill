setTimeout(() => {
    // "fc-dialog-container" 클래스를 가진 모든 div 요소를 찾고 삭제
    const dialogs = document.querySelectorAll('div.fc-dialog-container');
    dialogs.forEach(dialog => dialog.remove());
  
    // body의 overflow 스타일을 수정
    document.body.style.overflow = 'auto';
  }, 1000);
  