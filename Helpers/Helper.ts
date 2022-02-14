import RNFetchBlob from 'rn-fetch-blob';
import {
    Platform,
    PermissionsAndroid,
  } from 'react-native';
export const checkPermission = async (file:any) => {
    if (Platform.OS === 'ios') {
      downloadImage(file);
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download Photos',
            buttonPositive: '',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          console.log(',Storage Permission Granted.');
          downloadImage(file);
        } else {
          // If permission denied then show alert
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };

const downloadImage = (file:any) => {
    let date = new Date();

    let ext: any = getExtention(file);
    ext = '.' + ext[0];

    let PictureDir = RNFetchBlob.fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    RNFetchBlob.config(options)
      .fetch('GET', file)
      .then(res => {
        console.log('res -> ', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
      });
  };
const getExtention = (filename: string) => {
    // To get the file extension
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };