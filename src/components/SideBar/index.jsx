import { Sidebar } from 'primereact/sidebar';
import { Menu } from 'primereact/menu';
import { SIDEBAR_MENU_ITEMS } from './constants';


export const MenuSidebar = ({ visible, setVisible }) => {



    return (

        <Sidebar
            visible={visible}
            onHide={() => setVisible(false)}
        >
            <h2>Sidebar</h2>
            <div>
            <div className="card flex justify-content-center">
                    <Menu model={SIDEBAR_MENU_ITEMS} />
                </div>

            </div>
        </Sidebar>
    );
};

