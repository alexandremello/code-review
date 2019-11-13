import { CRMUseCase } from "../../usecases/crm.usecase";
import {
  snsData,
  formMappingData,
  formTrackingModel,
  sesMessageResponse,
  formTranslationPardotOutput,
  formTranslationEloquaOutput
} from "../mocksData";

describe("CRMUseCase", () => {
  let crmUseCase;
  let dbRepository;
  let snsRepository;
  let pardotRepository;
  let emailRepository;
  let formTranslator;
  let eloquaRepository;
  console.info = jest.fn();
  console.error = jest.fn();
  console.debug = jest.fn();
  console.warn = jest.fn();
});
