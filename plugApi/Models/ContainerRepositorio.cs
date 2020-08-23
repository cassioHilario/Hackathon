using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace plugApi.Models
{
    public class ContainerRepositorio : IContainerRepositorio
    {
        private readonly ApiContext _context;

        public ContainerRepositorio(ApiContext context)
        {
            _context = context;
        }

        public IEnumerable<ContainerItem> GetAll()
        {
            return _context.containers.ToList();
        }

        public void Add(ContainerItem item)
        {
            _context.containers.Add(item);
            _context.SaveChanges();
        }

        public ContainerItem Find(string cod_iso)
        {
            return _context.containers.FirstOrDefault(c => c.cod_iso == cod_iso);
        }

        public void Remove (string cod_iso)
        {
            var container = _context.containers.First(c => c.cod_iso == cod_iso);
            _context.containers.Remove(container);
            _context.SaveChanges();
        }

        public void Update (ContainerItem item)
        {
            _context.containers.Update(item);
            _context.SaveChanges();
        }

    }
}
