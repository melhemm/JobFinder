import { mount } from "@vue/test-utils";
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue'
import { useRouter } from "vue-router";
jest.mock("vue-router")

describe('JobSearchForm', () => { 
  describe('When user submits form', () => { 
    it('push user to job results with search params', async() => {
      const push = jest.fn()
      useRouter.mockReturnValue({
        push
      });
      
      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        }
      });
      const roleInput = wrapper.find("[data-test='role-input']");
      await roleInput.setValue('Vue Developer')

      const locationInput = wrapper.find("[data-test='location-input']");
      await locationInput.setValue("Moscow");

      const submitButton = wrapper.find("[data-test='form-submit-button']");
      await submitButton.trigger('click');

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Vue Developer",
          location: "Moscow"
        }
      })
    });
  });
});