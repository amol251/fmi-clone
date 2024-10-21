import React from 'react';
import RoundedCornerBtn from './Shared/RoundedCornerBtn';

const reports = [
  { category_name: 'Packaging', report_name: 'USA Barrier Packaging Market', category_link: 'https://www.futuremarketinsights.com/category/packaging', report_link: 'https://www.futuremarketinsights.com/reports/barrier-packaging-industry-analysis-in-europe' },
  { category_name: 'Packaging', report_name: 'Barrier Packaging Industry Analysis in Europe', category_link: 'https://www.futuremarketinsights.com/category/packaging', report_link: 'https://www.futuremarketinsights.com/reports/usa-barrier-packaging-market' },
  { category_name: 'Packaging', report_name: 'Multihead Weighers Market', category_link: 'https://www.futuremarketinsights.com/category/packaging', report_link: 'https://www.futuremarketinsights.com/reports/multihead-weighers-market' },
  { category_name: 'Packaging', report_name: 'North America BOPET Films Market', category_link: 'https://www.futuremarketinsights.com/category/packaging', report_link: 'https://www.futuremarketinsights.com/reports/north-america-bopet-films-market' },
  { category_name: 'Healthcare', report_name: 'Synthetic Hemostatic and Wound Care Products Market', category_link: 'https://www.futuremarketinsights.com/category/healthcare', report_link: 'https://www.futuremarketinsights.com/reports/synthetic-hemostatic-and-wound-care-products-market' },
  { category_name: 'Healthcare', report_name: 'Synthetic Bio-implants Market', category_link: 'https://www.futuremarketinsights.com/category/healthcare', report_link: 'https://www.futuremarketinsights.com/reports/synthetic-bio-implants-market' },
  { category_name: 'Packaging', report_name: 'USA Tapes Market', category_link: 'https://www.futuremarketinsights.com/category/packaging', report_link: 'https://www.futuremarketinsights.com/reports/usa-tapes-market' },
  { category_name: 'Healthcare', report_name: 'Pharmaceutical Grade Washer Market', category_link: 'https://www.futuremarketinsights.com/category/healthcare', report_link: 'https://www.futuremarketinsights.com/reports/pharmaceutical-grade-washer-market' },
];

const FeaturedReports = () => {
  return (
    <section class="publish_report_section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <div class="section_title_div text-center">
              <h2 class="section_title mb-3">Latest Reports</h2>
              <p class="mb-4">Published market research reports that dig deep to uncover niche segments &amp; hard-to-get insights</p>
            </div>
          </div>
        </div>
        <div class="row">
          {reports.map(report => (
            <div class="col-lg-3 col-md-3 col-sm-6 col-12 mb-4">
              <div class="publish_details_box p-3">
                <div class="cat_name mb-1">
                  <a href={report.category_link} title={report.category_name}>{report.category_name}</a>
                </div>
                <div class="report_name">
                  <h3><a href={report.report_link} title={report.report_name}>{report.report_name}</a></h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-12">
            <div class="all_reportBtn_div pt-4 text-center">
              <RoundedCornerBtn classname="all_reportBtn" label="Explore All Reports" link="https://www.futuremarketinsights.com/reports" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReports;
