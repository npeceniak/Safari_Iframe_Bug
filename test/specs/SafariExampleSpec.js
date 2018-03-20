describe('EASI Test Page', function() {

    it('Should be able to find the Video element inside the Iframe', function() {
        browser.url('http://test.spotx.tv/test/ad/js/easi-canary/index.html?easi_version=2&spotx_ad_unit=incontent&delay_page_load=&spotx_defer_execution=&ad_count=1&spotx_banner_size=&spotx_channel_id=209216&spotx_ad_format=html5&spotx_content_width=400&spotx_content_height=300&spotx_ad_max_duration=60&spotx_media_transcoding%5B%5D=&spotx_ad_bitrate=&spotx_content_page_url=http%3A%2F%2Fsearch.spotxchange.com&spotx_embed_element_id=&spotx_content_url=https%3A%2F%2Fia600208.us.archive.org%2F20%2Fitems%2FTreyBarthSample1Sample1mp4%2FSample_1_512kb.mp4&spotx_custom_skin=&spotx_hide_fullscreen=&spotx_autoplay=&spotx_blocked_autoplay_override_mode=&spotx_continue_out_view=&spotx_use_viewability=&spotx_ad_volume=70&spotx_ad_mute=0&spotx_ad_skippable=&spotx_ad_skip_delay=&spotx_force_mwa=&spotx_loop=&spotx_collapse=&spotx_unmute_on_mouse=&spotx_click_to_replay=&iframe=0&spotx_https=&spotx_interstitial_delay=&app%5Bspotx_app_name%5D=&app%5Bspotx_app_domain%5D=&app%5Bspotx_app_cat%5D=&app%5Bspotx_app_ver%5D=&app%5Bspotx_app_bundle%5D=&app%5Bspotx_app_privacypolicy%5D=&app%5Bspotx_app_storeurl%5D=&device%5Bspotx_device_ifa%5D=&device%5Bspotx_device_carrier%5D=&device%5Bspotx_device_os%5D=&device%5Bspotx_device_osv%5D=&device%5Bspotx_device_make%5D=&device%5Bspotx_device_model%5D=&device%5Bspotx_device_ua%5D=&device%5Bspotx_device_geo_lat%5D=&device%5Bspotx_device_geo_lon%5D=&device%5Bspotx_device_devicetype%5D=&device%5Bspotx_device_dnt%5D=&device%5Bspotx_device_connectiontype%5D=&user%5Bspotx_user_yob%5D=&user%5Bspotx_user_geo_lat%5D=&user%5Bspotx_user_geo_lon%5D=&spotx_query_params=&custom=&force_fullscreen=&spotx_digitrust_opt_out=&spotx_digitrust_timeout=&spotx_ados_device_ifa=&spotx_clickthru_macro=');
        browser.waitForExist("div[id^='spotx_content_container_']", 3000);
        browser.scroll("div[id^='spotx_content_container_']");
        
        // Wait a few seconds here for the iframes to load onto the page. 
        browser.pause(3000);

        console.log("Iframe Web Element Object: ");
        console.log(browser.elements('iframe[class=spotx_surrogate_iframe]'));

        expect(browser.getHTML("body")).toContain('iframe class="spotx_surrogate_iframe"');

        browser.waitForExist('iframe[class=spotx_surrogate_iframe]', 3000);

        // Check if the iframe exists on the page.
        expect(browser.isExisting('iframe[class=spotx_surrogate_iframe]')).toBe(true);

        // Then Switch to the frame. This is where the tests fail.
        browser.frame($('iframe[class=spotx_surrogate_iframe]').value);

        // Wait for one of the elements in the iframe to exist.
        browser.waitForExist("div#spotx_click_overlay", 10000);

        expect(browser.isExisting("div#spotx_click_overlay")).toBe(true);
    });

});