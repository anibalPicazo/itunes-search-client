import { shallowMount } from '@vue/test-utils'
import ReaderSongs from '@/components/ReaderSongs.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(ReaderSongs, {
    })
    expect(wrapper).toBeTruthy()  
  })
  it('readSongs methos is called when component is mounted', () => {
    const readSongs = jest.fn()
    shallowMount(ReaderSongs, {
      propsData: {
        pickupAction: 0
      },
      mocks: {
        $t: () => ''
      },
      stubs: {},
      methods: {
        readSongs
      }
    })
    expect(readSongs).toBeCalled()
  })
  it('should call handleClose method when user close or cancel the dialog', () => {
    const filterAlbum = jest.fn()
    const wrapper = shallowMount(ReaderSongs, {
      mocks: {
        $t: () => ''
      },
      stubs: {},
      methods: {
        filterAlbum
      }
    })
    const searchButpn = wrapper.find('.search-button')
    console.log('buton', searchButpn)
    searchButpn.vm.$emit('click')
    expect(filterAlbum).toBeCalled()
  })
  
})
