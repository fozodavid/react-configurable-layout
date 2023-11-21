import React, { useState } from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
import ExampleComponent from './ExampleComponent';
import ComponentSettingsModal from './ComponentSettingsModal';

type ComponentLayout = {
        i: string;
        backgroundColor?: string;
};

const Dashboard = () => {
    return null
    /*
    const [layout, setLayout] = useState<ComponentLayout[]>([]);
    
    const [selectedComponent, setSelectedComponent] = useState<ComponentLayout | null>(null);


    const onLayoutChange = (newLayout: Layout[]) => {
        setLayout(newLayout.map((item) => ({
                ...item,
                // i, // Convert i back to number as required by ComponentLayout type
        })));
    };

    const openSettings = (component: ComponentLayout) => {
        setSelectedComponent(component);
    };

    const closeSettings = () => {
        setSelectedComponent(null);
    };

    const saveSettings = (settings: ComponentLayout[]) => {
        // Apply settings to the selected component
        const updatedLayout = layout.map((item) =>
                item.i === selectedComponent?.i ? { ...item, ...settings } : item
        );
        setLayout(updatedLayout);
        closeSettings();
    };

    return (
        <div>
            <GridLayout
                className="layout"
                layout={layout.map((item) => ({
                    ...item,
                    i: item.i.toString(), // Convert i to string as required by Layout type
                }))}
                cols={12}
                rowHeight={30}
                width={1200}
                onLayoutChange={onLayoutChange}
                isDraggable
            >
                {layout.map((item) => (
                    <div key={item.i} onClick={() => openSettings(item)}>
                        <ExampleComponent
                            title={`Component ${item.i}`}
                            content="Some content"
                            backgroundColor={item.backgroundColor || '#ffffff'}
                        />
                    </div>
                ))}
            </GridLayout>
            {selectedComponent && (
                <ComponentSettingsModal
                    onSave={saveSettings}
                    onCancel={closeSettings}
                />
            )}
        </div>
    );
              content="Some content"
              backgroundColor={item.backgroundColor || '#ffffff'}
            />
          </div>
        ))}
      </GridLayout>
      {selectedComponent && (
        <ComponentSettingsModal
          onSave={saveSettings}
          onCancel={closeSettings}
        />
      )}
    </div>

  );
  */
};

export default Dashboard;