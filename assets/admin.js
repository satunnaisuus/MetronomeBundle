import { Application } from "@hotwired/stimulus";

import 'bootstrap/js/dist/offcanvas';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';

import ActionConfirmationController from "./controllers/action_confirmation_controller";
import AdminDataTableController from "./controllers/admin_data_table_controller";
import AjaxUploaderController from "./controllers/ajax_uploader_controller";
import CrudFormController from "./controllers/crud_form_controller";
import FormCollectionController from "./controllers/form_collection_controller";
import MenuToggleController from "./controllers/menu_toggle_controller";
import ResourcePickerController from "./controllers/resource_picker_controller";
import SidebarController from "./controllers/sidebar_controller";
import TooltipController from "./controllers/tooltip_controller";

const application = Application.start();

application.register('action-confirmation', ActionConfirmationController);
application.register('admin-data-table', AdminDataTableController);
application.register('ajax-uploader', AjaxUploaderController);
application.register('crud-form', CrudFormController);
application.register('form-collection', FormCollectionController);
application.register('menu-toggle', MenuToggleController);
application.register('resource-picker', ResourcePickerController);
application.register('sidebar', SidebarController);
application.register('tooltip', TooltipController);

export default application;