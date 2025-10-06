window.onload = function() {
  const scrin = document.getElementById('scrin');
  const shock = document.getElementById('shock');
  const dog = document.getElementById('dog');
  const container = document.querySelector('.container');
  const music = document.getElementById('music');

  let timer;

  // Розблокування аудіо при першому кліку
  document.body.addEventListener('click', function unlockAudio() {
    if (music) {
      music.play();
      music.pause();
      music.currentTime = 0;
    }
    document.body.removeEventListener('click', unlockAudio);
  });

  // Початкові стилі
  scrin.style.transition = 'opacity 1.5s, filter 1.5s';
  shock.style.opacity = '0';
  shock.style.position = 'absolute';
  shock.style.transition = 'opacity 1.5s';
  shock.style.pointerEvents = 'none';
  dog.style.opacity = '0';
  dog.style.position = 'absolute';
  dog.style.filter = 'blur(12px)';
  dog.style.transition = 'opacity 4s, filter 4s, transform 1.5s';
  dog.style.pointerEvents = 'none';

  container.style.position = 'relative';
  scrin.style.position = 'relative';
  shock.style.position = 'absolute';
  dog.style.position = 'absolute';

  scrin.addEventListener('mouseenter', function() {
    if (timer) clearTimeout(timer);

    scrin.style.opacity = '0.2';
    scrin.style.filter = 'blur(8px)';

    shock.style.transform = 'scale(2.5)';
    shock.style.left = `calc(50% - 150px)`;
    shock.style.top = `calc(50% - 125px)`;
    shock.style.width = '300px';
    shock.style.opacity = '1';

    dog.style.opacity = '0';
    dog.style.filter = 'blur(12px)';
    dog.style.transform = 'scale(2)';
    dog.style.left = `calc(50% - 150px)`;
    dog.style.top = `calc(50% - 150px)`;
    dog.style.width = '300px';

    // Запустити музику
    if (music) {
      music.currentTime = 0;
      music.play();
    }

    timer = setTimeout(() => {
      shock.style.opacity = '0';
      dog.style.opacity = '1';
      dog.style.filter = 'blur(0px)';
    }, 1500);
  });

  scrin.addEventListener('mouseleave', function() {
    if (timer) clearTimeout(timer);

    scrin.style.opacity = '1';
    scrin.style.filter = 'none';
    shock.style.opacity = '0';
    dog.style.opacity = '0';
    dog.style.filter = 'blur(12px)';
    dog.style.transform = 'scale(2)';
    dog.style.left = `calc(50% - 150px)`;
    dog.style.top = `calc(50% - 150px)`;
    dog.style.width = '300px';
    if (music) {
      music.pause();
      music.currentTime = 0;
    }
  });
};
