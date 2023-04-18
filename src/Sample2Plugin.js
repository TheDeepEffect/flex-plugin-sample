import React from "react"
import { FlexPlugin } from "@twilio/flex-plugin"
import CustomCRM from "./components/CustomCRM"


const PLUGIN_NAME = "SamplePlugin"

export default class SamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME)
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    flex.CRMContainer.Content.replace(<CustomCRM key="customCRM" manager={manager} />)
  }
}
