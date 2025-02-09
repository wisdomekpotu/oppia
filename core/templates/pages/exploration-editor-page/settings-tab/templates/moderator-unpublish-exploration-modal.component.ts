// Copyright 2020 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Component for moderator unpublish exploration modal.
 */

import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmOrCancelModal } from 'components/common-layout-directives/common-elements/confirm-or-cancel-modal.component';

@Component({
  selector: 'oppia-delete-exploration-modal',
  templateUrl: './moderator-unpublish-exploration-modal.component.html'
})
export class ModeratorUnpublishExplorationModalComponent
  extends ConfirmOrCancelModal implements OnInit {
  @Input() draftEmailBody: string;

  EMAIL_BODY_SCHEMA: object;
  willEmailBeSent: boolean;
  emailBody: string;

  constructor(
    private ngbActiveModal: NgbActiveModal,
  ) {
    super(ngbActiveModal);
  }

  ngOnInit(): void {
    this.willEmailBeSent = Boolean(this.draftEmailBody);
    this.emailBody = this.draftEmailBody;

    if (this.willEmailBeSent) {
      this.EMAIL_BODY_SCHEMA = {
        type: 'unicode',
        ui_config: {
          rows: 20
        }
      };
    }
  }

  getSchema(): object {
    return this.EMAIL_BODY_SCHEMA;
  }

  updateValue(value: string): void {
    this.emailBody = value;
  }
}
