
const project_id = "bigquery-402616";
const shopify_dataset = "airbyte_shopify";

const ga4_dataset = "analytics_308383194";
const google_ads_dataset = "Google_Ads";
const facebook_dataset = "airbyte_fb";
// const tests_dataset = "tests";
// const google_sheets_dataset = "google_sheets";
const project_dataset = "zenlytic_staging_tables";
const mapping_dataset = "zenlytic_mapping_tables";
const tests_dataset = "zenlytic_tests_tables";
const final_dataset = "zenlytic_final_tables";


const shopify_orders_table = `${project_id}.${shopify_dataset}.orders`;
const shopify_refunds_table = `${project_id}.${shopify_dataset}.v31order_refunds`;
const shopify_smart_collections_table = `${project_id}.${shopify_dataset}.smart_collections`;
const shopify_custom_collections_table = `${project_id}.${shopify_dataset}.custom_collections`;
const shopify_collects_table = `${project_id}.${shopify_dataset}.collects`;

const facebook_ads_table = `${project_id}.${facebook_dataset}.ads_insights`;
const google_ads_table = `${project_id}.${google_ads_dataset}.p_ads_CampaignBasicStats_2166029510`;
const google_ads_gclids_table = `${project_id}.${google_ads_dataset}.p_ads_ClickStats_2166029510`;

const google_ads_campaign_name_mapping_table = `${project_id}.${google_ads_dataset}.p_ads_Campaign_2166029510`;
const ga4_table = `${project_id}.${ga4_dataset}.events_*`;

const mapping_shopify_sales_channel_table_url = "https://docs.google.com/spreadsheets/d/1nmAsZitvlQB_17Wy4Diowo5ukeSRA1vPef6htfJgbCc/edit";
const tests_shopify_expected_table_url = "https://docs.google.com/spreadsheets/d/1R5X0sg1CGBdC__9PlI04j-yuLTWqs_reS160Y00W8EY/edit";
const tests_facebook_ads_expected_table_url = "https://docs.google.com/spreadsheets/d/1JaSZz6z7xWNcujwSK9jOn_t_XonG_0bHYn6p8rYpUnE/edit";
const tests_google_ads_expected_table_url = "https://docs.google.com/spreadsheets/d/1wxq7bjhTZDXtppOfjkITMK-BKmboS3JPcHjDJmMqLw4/edit";
const tests_ga4_basic_metrics_expected_table_url = "https://docs.google.com/spreadsheets/d/13cGLubROpSr8nf-IblurUjlVWoOYbZUjrxOxWwk33pw/edit";

const mapping_shopify_sales_channel_table = `${project_id}.${mapping_dataset}.mapping_shopify_sales_channel`;
const mapping_shopify_sales_channel_table_skip_leading_rows = "1";
const tests_shopify_expected_table = `${project_id}.${tests_dataset}.shopify_expected`;
const tests_shopify_expected_table_skip_leading_rows = "1";
const tests_facebook_ads_expected_table = `${project_id}.${tests_dataset}.facebook_ads_expected`;
const tests_facebook_ads_expected_table_skip_leading_rows = "1";
const tests_google_ads_expected_table = `${project_id}.${tests_dataset}.google_ads_expected`;
const tests_google_ads_expected_table_skip_leading_rows = "1";
const tests_ga4_basic_metrics_expected_table = `${project_id}.${tests_dataset}.ga4_basic_metrics_expected`;
const tests_ga4_basic_metrics_expected_table_skip_leading_rows = 1;

const unknown_variable = "Unknown";
const not_applicable_variable = "N/A";

module.exports = { project_id,shopify_dataset,ga4_dataset,google_ads_dataset,facebook_dataset,tests_dataset,final_dataset
// ,google_sheets_dataset
,project_dataset,mapping_dataset,shopify_orders_table,shopify_refunds_table,shopify_smart_collections_table,shopify_custom_collections_table,shopify_collects_table,facebook_ads_table,google_ads_table,google_ads_gclids_table,google_ads_campaign_name_mapping_table,ga4_table,mapping_shopify_sales_channel_table,mapping_shopify_sales_channel_table_url,tests_shopify_expected_table_url,tests_shopify_expected_table,tests_shopify_expected_table_skip_leading_rows,tests_facebook_ads_expected_table,tests_facebook_ads_expected_table_skip_leading_rows,tests_facebook_ads_expected_table_url,tests_google_ads_expected_table,tests_google_ads_expected_table_skip_leading_rows,tests_google_ads_expected_table_url, unknown_variable,not_applicable_variable,tests_ga4_basic_metrics_expected_table_url,tests_ga4_basic_metrics_expected_table,tests_ga4_basic_metrics_expected_table_skip_leading_rows,mapping_shopify_sales_channel_table_skip_leading_rows
};