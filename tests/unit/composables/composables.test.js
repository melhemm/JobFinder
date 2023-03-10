import { useStore } from "vuex";
jest.mock("vuex");
import { useFetchJobsDispatch, useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables"

describe('composables', () => { 
  describe('useUniqueJobTypes', () => {
    it('retrives unique job types from store', () => {
      useStore.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: new Set(["Full-time"]),
        }
      })
      const result = useUniqueJobTypes();
      expect(result.value).toEqual(new Set(["Full-time"]))
    });
  });  

  describe('useUniqueOrganizations from store', () => {
    it('retreves unique job organizations from store', () => {
      useStore.mockReturnValue({
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(["Apple"]),
        }
      })
      const result = useUniqueOrganizations();
      expect(result.value).toEqual(new Set(["Apple"]))
    });
  });

  describe('useFetchJobsDispatch', () => {
    it('sends call to fetch jobs from API', () => {
      const dispatch = jest.fn()
      useStore.mockReturnValue({
        dispatch,
      })
      useFetchJobsDispatch();
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS")
    });
    
  });
});
