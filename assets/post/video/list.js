const artplayerPlaylist = (options) => (art) => {
  const addedI18n = {
    'zh-cn': {
      playlist: '播放列表'
    },
    en: {
      playlist: 'Playlist'
    }
  };
  art.i18n.update(addedI18n);


  const changeVideo = (art, index) => {
    if (!options.playlist[index]) {
      return;
      }

      art.currentPlaylistIndex = index;

      const artOptions = art.option;

      let newArtplayer = art;
      
    if (options.rebuildPlayer) {
      art.destroy();

      newArtplayer = new Artplayer({
        ...artOptions,
        ...options.playlist[index],
        autoplay: options.autoNext ?? artOptions.autoplay,
        i18n: addedI18n,
        id: `${artOptions.id}-${index === 0 ? '' : index}`
      });
    } else {
      art.switchUrl(options.playlist[index].url, options.playlist[index].title);
      if (options.autoNext ?? artOptions.autoplay) {
        art.play();
      }
    }

 
    if (typeof options.onchanged === 'function') {
      options.onchanged(newArtplayer);
    }
  };


  const currentEp = options.playlist.findIndex((videoInfo) => videoInfo.url === art.option.url);
  if (options.autoNext && currentEp < options.playlist.length) {
    art.on('video:ended', () => {
      changeVideo(art, currentEp + 1);
    });
  }

  const icon = '<i class="art-icon"><svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path d="M810.666667 384H85.333333v85.333333h725.333334V384z m0-170.666667H85.333333v85.333334h725.333334v-85.333334zM85.333333 640h554.666667v-85.333333H85.333333v85.333333z m640-85.333333v256l213.333334-128-213.333334-128z" fill="#ffffff"></path></svg></i>';


  art.controls.add({
    name: 'playlist',
    position: 'right',
    html: options.showText ? art.i18n.get('playlist') : icon,
    style: { padding: '0 10px' },
    selector: options.playlist.map((videoInfo, index) => ({
      html: `${index + 1}. ${videoInfo.title || `Ep.${index + 1}`}`,
      style: { textAlign: 'left' },
      index,
      default: currentEp === index
    })),
    onSelect(item) {
      changeVideo(art, item.index);
      return options.showText ? art.i18n.get('playlist') : icon;
    }
  });

  return {
    name: 'artplayerPlaylist'
  };
};

if (typeof window !== 'undefined') {
  window.artplayerPlaylist = artplayerPlaylist;
}