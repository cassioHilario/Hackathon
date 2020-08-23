import {NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import {A11yModule} from '@angular/cdk/a11y';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete'

// Incluindo todos os materiais utilizados no projeto.

 @NgModule({
    exports: [
        // CDK
        A11yModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule,
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        // Material
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatSelectModule,
        MatSidenavModule,
        MatTabsModule,
        MatToolbarModule,
        MatDividerModule,
        MatAutocompleteModule
    ]
})
export class MaterialModule {}