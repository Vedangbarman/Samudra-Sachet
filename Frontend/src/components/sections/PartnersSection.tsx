const PartnersSection = () => {
  return (
    <section className="bg-card py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-muted-foreground mb-8">
          An Initiative By
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="text-center p-6 rounded-xl bg-background border border-border shadow-card hover:shadow-ocean transition-wave">
              <img 
                className="h-20 mx-auto mb-4" 
                src="https://www.moes.gov.in/sites/all/themes/moes/images/logo.png" 
                alt="Ministry of Earth Sciences Logo"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/200x80/0066cc/ffffff?text=MoES';
                }}
              />
              <p className="font-semibold text-foreground">Ministry of Earth Sciences (MoES)</p>
              <p className="text-sm text-muted-foreground">Government of India</p>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-start">
            <div className="text-center p-6 rounded-xl bg-background border border-border shadow-card hover:shadow-ocean transition-wave">
              <img 
                className="h-20 mx-auto mb-4" 
                src="https://www.incois.gov.in/images/incois_logo.png" 
                alt="INCOIS Logo"
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/200x80/0066cc/ffffff?text=INCOIS';
                }}
              />
              <p className="font-semibold text-foreground">
                Indian National Centre for Ocean Information Services (INCOIS)
              </p>
              <p className="text-sm text-muted-foreground">An autonomous body under the MoES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;