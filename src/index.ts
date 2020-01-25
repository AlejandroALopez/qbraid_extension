import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the qbraid_extension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'qbraid_extension',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension qbraid_extension is activated!');
  }
};

export default extension;
