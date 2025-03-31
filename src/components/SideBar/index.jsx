import { Sidebar } from 'primereact/sidebar';
import { Menu } from 'primereact/menu';
import { SIDEBAR_MENU_ITEMS } from './constants';


export const MenuSidebar = ({ visible, setVisiable }) => {



    return (

        <Sidebar
            visible={visible}
            onHide={() => setVisiable(false)}
        >
            <h2>Sidebar</h2>
            <p>
            <div className="card flex justify-content-center">
                    <Menu model={SIDEBAR_MENU_ITEMS} />
                </div>

            </p>
        </Sidebar>
    );
};

